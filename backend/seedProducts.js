// import "dotenv/config";
// import mongoose from "mongoose";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// import Product from "./model/productModel.js";
// import uploadOnCloudinary from "./config/cloudinary.js";

// // =====================================================
// // PATH
// // =====================================================

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const imageFolder = path.join(__dirname, "product-images");

// // =====================================================
// // MONGODB
// // =====================================================

// const mongoUrl = process.env.MONGODB_URL;

// if (!mongoUrl) {
//     console.log("❌ MONGODB_URL not found in .env");
//     process.exit(1);
// }

// // =====================================================
// // PRODUCTS
// // =====================================================

// const products = [

//     // =================================================
//     // GIRL
//     // =================================================

//     {
//         name: "Girl Fashion",
//         files: [
//             "girl 23.jpg"
//         ],
//         description: "Stylish and comfortable fashion wear for girls.",
//         price: 799,
//         category: "Kids",
//         subCategory: "Girls",
//         sizes: ["S", "M", "L", "XL"],
//         bestseller: true
//     },

//     {
//         name: "Girl Collection",
//         files: [
//             "girl.jpg"
//         ],
//         description: "Trendy and comfortable girls collection.",
//         price: 699,
//         category: "Kids",
//         subCategory: "Girls",
//         sizes: ["S", "M", "L", "XL"],
//         bestseller: false
//     },

//     // =================================================
//     // KIDS JACKETS
//     // =================================================

//     {
//         name: "Kids Girl Jacket",
//         files: [
//             "jacket for kids girl.jpg",
//             "jacket for kids girl1.jpg",
//             "jacket for kids girl2.jpg",
//             "jacket for kids girl3.jpg"
//         ],
//         description: "Warm and stylish winter jacket for girls.",
//         price: 1299,
//         category: "Kids",
//         subCategory: "Girls",
//         sizes: ["S", "M", "L", "XL"],
//         bestseller: true
//     },

//     {
//         name: "Kids Jacket",
//         files: [
//             "jacket for kids.jpg",
//             "jacket for kids1.jpg",
//             "jacket for kids2.jpg",
//             "jacket for kids3.jpg"
//         ],
//         description: "Comfortable winter jacket for kids.",
//         price: 1199,
//         category: "Kids",
//         subCategory: "Winter Wear",
//         sizes: ["S", "M", "L", "XL"],
//         bestseller: true
//     },

//     // =================================================
//     // MEN JACKETS
//     // =================================================

//     {
//         name: "Men Jacket",
//         files: [
//             "jacket for men.jpg",
//             "jacket for men1.jpg",
//             "jacket for men2.jpg",
//             "jacket for men3.jpg"
//         ],
//         description: "Stylish and warm winter jacket for men.",
//         price: 1799,
//         category: "Men",
//         subCategory: "Winter Wear",
//         sizes: ["S", "M", "L", "XL", "XXL"],
//         bestseller: true
//     },

//     // =================================================
//     // WOMEN JACKETS
//     // =================================================

//     {
//         name: "Women Jacket",
//         files: [
//             "jacket for women.jpg",
//             "jacket for women1.jpg",
//             "jacket for women2.jpg",
//             "jacket for women3.jpg"
//         ],
//         description: "Stylish and comfortable winter jacket for women.",
//         price: 1699,
//         category: "Women",
//         subCategory: "Winter Wear",
//         sizes: ["S", "M", "L", "XL"],
//         bestseller: true
//     },

//     // =================================================
//     // KIDS PANTS
//     // =================================================

//     {
//         name: "Kids Pant",
//         files: [
//             "kidspant1.jpg",
//             "kidspant2.jpg",
//             "kidspant3.jpg",
//             "kidspant4.jpg"
//         ],
//         description: "Comfortable and stylish pants for kids.",
//         price: 699,
//         category: "Kids",
//         subCategory: "Pants",
//         sizes: ["S", "M", "L", "XL"],
//         bestseller: false
//     },

//     // =================================================
//     // KIDSWEAR
//     // =================================================

//     {
//         name: "Kids Wear",
//         files: [
//             "kidswear1.jpg",
//             "kidswear2.jpg",
//             "kidswear3.jpg",
//             "kidswear4.jpg"
//         ],
//         description: "Comfortable everyday wear collection for kids.",
//         price: 899,
//         category: "Kids",
//         subCategory: "Girls",
//         sizes: ["S", "M", "L", "XL"],
//         bestseller: true
//     },

//     {
//         name: "Kids Wear Premium",
//         files: [
//             "kidswear11.jpg",
//             "kidswear22.jpg",
//             "kidswear33.jpg",
//             "kidswear44.jpg"
//         ],
//         description: "Premium and stylish kids wear collection.",
//         price: 999,
//         category: "Kids",
//         subCategory: "Girls",
//         sizes: ["S", "M", "L", "XL"],
//         bestseller: false
//     },

//     // =================================================
//     // KIDS T-SHIRTS
//     // =================================================

//     {
//         name: "Kids T-Shirt",
//         files: [
//             "kidt-shirt1.jpg",
//             "kidt-shirt2.jpg",
//             "kidt-shirt3.jpg",
//             "kidt-shirt4.jpg"
//         ],
//         description: "Trendy and comfortable T-shirt for kids.",
//         price: 499,
//         category: "Kids",
//         subCategory: "T-Shirts",
//         sizes: ["S", "M", "L", "XL"],
//         bestseller: true
//     },

//     // =================================================
//     // MEN LOWER
//     // =================================================

//     {
//         name: "Men Lower",
//         files: [
//             "manlower1.jpg",
//             "manlower2.jpg",
//             "manlower3.jpg",
//             "manlower4.jpg"
//         ],
//         description: "Comfortable casual lower for men.",
//         price: 699,
//         category: "Men",
//         subCategory: "Lower",
//         sizes: ["S", "M", "L", "XL", "XXL"],
//         bestseller: false
//     },

//     // =================================================
//     // MEN PANTS
//     // =================================================

//     {
//         name: "Men Pant",
//         files: [
//             "pantman1.jpg",
//             "pantman2.jpg",
//             "pantman3.jpg",
//             "pantman4.jpg"
//         ],
//         description: "Classic and comfortable pants for men.",
//         price: 999,
//         category: "Men",
//         subCategory: "Pants",
//         sizes: ["28", "30", "32", "34", "36"],
//         bestseller: true
//     },

//     {
//         name: "Men Pant Premium",
//         files: [
//             "pantman11.jpg",
//             "pantman22.jpg",
//             "pantman33.jpg",
//             "pantman44.jpg"
//         ],
//         description: "Premium men's pants collection.",
//         price: 1199,
//         category: "Men",
//         subCategory: "Pants",
//         sizes: ["28", "30", "32", "34", "36"],
//         bestseller: false
//     },

//     // =================================================
//     // WOMEN PANTS
//     // =================================================

//     {
//         name: "Women Pant",
//         files: [
//             "pantwoman1.jpg",
//             "pantwoman2.jpg",
//             "pantwoman3.jpg",
//             "pantwoman4.jpg"
//         ],
//         description: "Stylish and comfortable pants for women.",
//         price: 899,
//         category: "Women",
//         subCategory: "Pants",
//         sizes: ["S", "M", "L", "XL"],
//         bestseller: true
//     },

//     {
//         name: "Women Pant Premium",
//         files: [
//             "pantwoman11.jpg",
//             "pantwoman22.jpg",
//             "pantwoman33.jpg",
//             "pantwoman144.jpg"
//         ],
//         description: "Premium women's pants collection.",
//         price: 1099,
//         category: "Women",
//         subCategory: "Pants",
//         sizes: ["S", "M", "L", "XL"],
//         bestseller: false
//     },

//     // =================================================
//     // MEN SHIRTS
//     // =================================================

//     {
//         name: "Men Shirt",
//         files: [
//             "shirtman1.jpg",
//             "shirtman2.jpg",
//             "shirtman3.jpg",
//             "shirtman4.jpg"
//         ],
//         description: "Stylish casual shirt for men.",
//         price: 799,
//         category: "Men",
//         subCategory: "Shirts",
//         sizes: ["S", "M", "L", "XL", "XXL"],
//         bestseller: true
//     },

//     {
//         name: "Men Shirt Premium",
//         files: [
//             "shirtman11.jpg",
//             "shirtman22.jpg",
//             "shirtman33.jpg",
//             "shirtman44.jpg"
//         ],
//         description: "Premium men's shirt collection.",
//         price: 999,
//         category: "Men",
//         subCategory: "Shirts",
//         sizes: ["S", "M", "L", "XL", "XXL"],
//         bestseller: false
//     },

//     // =================================================
//     // WOMEN SHIRTS
//     // =================================================

//     {
//         name: "Women Shirt",
//         files: [
//             "shirtwomen1.jpg",
//             "shirtwomen2.jpg",
//             "shirtwomen3.jpg",
//             "shirtwomen4.jpg"
//         ],
//         description: "Elegant and comfortable women's shirt.",
//         price: 799,
//         category: "Women",
//         subCategory: "Shirts",
//         sizes: ["S", "M", "L", "XL"],
//         bestseller: true
//     },

//     {
//         name: "Women Shirt Premium",
//         files: [
//             "shirtwomen11.jpg",
//             "shirtwomen22.jpg",
//             "shirtwomen33.jpg",
//             "shirtwomen44.jpg"
//         ],
//         description: "Premium women's shirt collection.",
//         price: 999,
//         category: "Women",
//         subCategory: "Shirts",
//         sizes: ["S", "M", "L", "XL"],
//         bestseller: true
//     },

//     {
//         name: "Women Shirt Collection",
//         files: [
//             "shirtwomen111.jpg",
//             "shirtwomen222.jpg",
//             "shirtwomen333.jpg",
//             "shirtwomen444.jpg"
//         ],
//         description: "Latest women's shirt collection.",
//         price: 1099,
//         category: "Women",
//         subCategory: "Shirts",
//         sizes: ["S", "M", "L", "XL"],
//         bestseller: false
//     },

//     // =================================================
//     // MEN T-SHIRTS
//     // =================================================

//     {
//         name: "Men T-Shirt",
//         files: [
//             "t-shirtman1.jpg",
//             "t-shirtman2.jpg",
//             "t-shirtman3.jpg",
//             "t-shirtman4.jpg"
//         ],
//         description: "Comfortable casual T-shirt for men.",
//         price: 499,
//         category: "Men",
//         subCategory: "T-Shirts",
//         sizes: ["S", "M", "L", "XL", "XXL"],
//         bestseller: true
//     },

//     // =================================================
//     // WOMEN T-SHIRTS
//     // =================================================

//     {
//         name: "Women T-Shirt",
//         files: [
//             "t-shirtwomen1.jpg",
//             "t-shirtwomen2.jpg",
//             "t-shirtwomen3.jpg",
//             "t-shirtwomen4.jpg"
//         ],
//         description: "Trendy casual T-shirt for women.",
//         price: 499,
//         category: "Women",
//         subCategory: "T-Shirts",
//         sizes: ["S", "M", "L", "XL"],
//         bestseller: true
//     }

// ];

// // =====================================================
// // FIND IMAGE
// // =====================================================

// function findImage(fileName) {

//     const exactPath = path.join(imageFolder, fileName);

//     // Exact filename
//     if (fs.existsSync(exactPath)) {
//         return exactPath;
//     }

//     // Windows case-insensitive fallback
//     if (!fs.existsSync(imageFolder)) {
//         return null;
//     }

//     const files = fs.readdirSync(imageFolder);

//     const found = files.find(
//         file => file.toLowerCase() === fileName.toLowerCase()
//     );

//     if (found) {
//         return path.join(imageFolder, found);
//     }

//     return null;
// }

// // =====================================================
// // UPLOAD PRODUCT
// // =====================================================

// async function uploadProduct(product) {

//     console.log("\n--------------------------------");
//     console.log(`Product: ${product.name}`);
//     console.log("--------------------------------");

//     const imagePaths = [];

//     // Find available images
//     for (const fileName of product.files) {

//         const imagePath = findImage(fileName);

//         if (imagePath) {

//             imagePaths.push(imagePath);

//         } else {

//             console.log(`⚠️ File not found: ${fileName}`);

//         }
//     }

//     // At least one image must exist
//     if (imagePaths.length === 0) {

//         console.log(
//             `⏭️ SKIPPED: ${product.name} - koi image nahi mili`
//         );

//         return;
//     }

//     // Upload images
//     const uploadedImages = [];

//     for (const imagePath of imagePaths) {

//         const fileName = path.basename(imagePath);

//         console.log(`☁️ Uploading ${fileName}...`);

//         try {

//             const result = await uploadOnCloudinary(imagePath);

//             if (!result) {

//                 throw new Error(
//                     `Cloudinary upload failed: ${fileName}`
//                 );

//             }

//             uploadedImages.push(result);

//             console.log(`✅ Uploaded: ${fileName}`);

//         } catch (error) {

//             console.log(
//                 `❌ ERROR in ${product.name}:`,
//                 error.message
//             );

//         }
//     }

//     // No image uploaded
//     if (uploadedImages.length === 0) {

//         console.log(`❌ FAILED: ${product.name}`);

//         return;
//     }

//     // =================================================
//     // FILL REQUIRED IMAGE FIELDS
//     // =================================================

//     const image1 = uploadedImages[0];

//     const image2 =
//         uploadedImages[1] ||
//         image1;

//     const image3 =
//         uploadedImages[2] ||
//         image2;

//     const image4 =
//         uploadedImages[3] ||
//         image3;

//     // =================================================
//     // CHECK DUPLICATE
//     // =================================================

//     const existingProduct = await Product.findOne({
//         name: product.name
//     });

//     if (existingProduct) {

//         console.log(
//             `⏭️ ALREADY EXISTS: ${product.name}`
//         );

//         return;
//     }

//     // =================================================
//     // ADD TO DATABASE
//     // =================================================

//     await Product.create({

//         name: product.name,

//         image1: image1,
//         image2: image2,
//         image3: image3,
//         image4: image4,

//         description: product.description,

//         price: product.price,

//         category: product.category,

//         subCategory: product.subCategory,

//         sizes: product.sizes,

//         date: Date.now(),

//         bestseller: product.bestseller

//     });

//     console.log(`🎉 ADDED: ${product.name}`);
// }

// // =====================================================
// // MAIN
// // =====================================================

// async function seedProducts() {

//     try {

//         // Connect MongoDB
//         await mongoose.connect(mongoUrl);

//         console.log("✅ MongoDB connected");

//         // Check image folder
//         if (!fs.existsSync(imageFolder)) {

//             console.log(
//                 `❌ product-images folder nahi mila:\n${imageFolder}`
//             );

//             return;
//         }

//         console.log(
//             `📁 Image folder: ${imageFolder}`
//         );

//         // Upload every product
//         for (const product of products) {

//             try {

//                 await uploadProduct(product);

//             } catch (error) {

//                 console.log(
//                     `❌ ERROR in ${product.name}:`,
//                     error.message
//                 );

//             }

//         }

//         console.log("\n================================");
//         console.log("🎉 BULK PRODUCT UPLOAD COMPLETE");
//         console.log("================================");

//     } catch (error) {

//         console.log("❌ SEED ERROR:", error.message);

//     } finally {

//         await mongoose.disconnect();

//         console.log("🔌 MongoDB disconnected");
//     }
// }

// // =====================================================
// // START
// // =====================================================

// seedProducts();