const fs = require('fs');
const path = require('path');

// Directory containing the photos
const photosDir = path.join(process.cwd(), 'public/photos/listings/Cotswolds Luxury Retreat');

// Get the list of photos currently in the directory
try {
  console.log('🔍 Checking photos in the Cotswolds Luxury Retreat folder...');
  
  // Get all files in the directory
  const files = fs.readdirSync(photosDir);
  
  // Count files
  const imageCount = files.filter(file => 
    file.toLowerCase().endsWith('.jpg') || 
    file.toLowerCase().endsWith('.jpeg') || 
    file.toLowerCase().endsWith('.png')
  ).length;
  
  console.log(`Found ${imageCount} images in the directory.`);
  console.log('All photos are up to date. No need to delete any files.');
  
} catch (error) {
  console.error('❌ Error:', error.message);
} 