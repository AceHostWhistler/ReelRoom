const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// Quality settings
const JPEG_QUALITY = 80; // 0-100, higher is better quality
const PNG_QUALITY = 80; // 0-100, higher is better quality
const WEBP_QUALITY = 80; // 0-100, higher is better quality

// Compression output folder
const OUTPUT_DIR = path.join(process.cwd(), 'public/photos');

// Counter for stats
let totalImages = 0;
let totalProcessed = 0;
let totalSizeBefore = 0;
let totalSizeAfter = 0;

async function getFilesRecursively(dir) {
  const files = await readdir(dir);
  const allFiles = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const stats = await stat(filePath);
      
      if (stats.isDirectory()) {
        return getFilesRecursively(filePath);
      } else if (
        stats.isFile() && 
        (file.toLowerCase().endsWith('.jpg') || 
         file.toLowerCase().endsWith('.jpeg') || 
         file.toLowerCase().endsWith('.png'))
      ) {
        return filePath;
      }
      return [];
    })
  );
  
  return allFiles.flat();
}

async function compressImage(filePath) {
  const fileExt = path.extname(filePath).toLowerCase();
  const fileName = path.basename(filePath);
  const fileDir = path.dirname(filePath);
  const originalSize = fs.statSync(filePath).size;
  totalSizeBefore += originalSize;
  
  try {
    let sharpInstance = sharp(filePath);
    let outputPath = filePath;
    
    // Resize very large images
    const metadata = await sharpInstance.metadata();
    const maxDimension = 2500; // Max dimension for any image
    
    if (metadata.width > maxDimension || metadata.height > maxDimension) {
      const isLandscape = metadata.width >= metadata.height;
      sharpInstance = isLandscape 
        ? sharpInstance.resize({ width: maxDimension }) 
        : sharpInstance.resize({ height: maxDimension });
    }
    
    // Use different compression settings based on file type
    if (fileExt === '.jpg' || fileExt === '.jpeg') {
      await sharpInstance
        .jpeg({ quality: JPEG_QUALITY, progressive: true })
        .toFile(outputPath + '.temp');
    } else if (fileExt === '.png') {
      await sharpInstance
        .png({ quality: PNG_QUALITY, compressionLevel: 9 })
        .toFile(outputPath + '.temp');
    }
    
    // Replace original with compressed version
    fs.unlinkSync(filePath);
    fs.renameSync(outputPath + '.temp', outputPath);
    
    // Calculate stats
    const newSize = fs.statSync(outputPath).size;
    totalSizeAfter += newSize;
    const savingsPercent = ((originalSize - newSize) / originalSize * 100).toFixed(2);
    
    console.log(`✅ ${fileName}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${savingsPercent}% saved)`);
    
    return true;
  } catch (error) {
    console.error(`❌ Error processing ${fileName}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🔍 Finding all images...');
  const imageFiles = await getFilesRecursively(OUTPUT_DIR);
  totalImages = imageFiles.length;
  
  console.log(`Found ${totalImages} images. Starting compression...`);
  
  for (const file of imageFiles) {
    const success = await compressImage(file);
    if (success) totalProcessed++;
  }
  
  // Print summary
  console.log('\n📊 Compression Summary:');
  console.log(`Total images processed: ${totalProcessed}/${totalImages}`);
  console.log(`Total size before: ${(totalSizeBefore / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total size after: ${(totalSizeAfter / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total savings: ${((totalSizeBefore - totalSizeAfter) / 1024 / 1024).toFixed(2)}MB (${((totalSizeBefore - totalSizeAfter) / totalSizeBefore * 100).toFixed(2)}%)`);
}

main().catch(console.error); 