export const uploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    // Cloudinary ড্যাশবোর্ড থেকে পাওয়া Unsigned Preset নাম এখানে বসান
    formData.append("upload_preset", "adv-shamiul-islam-prince-associates");

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/dylmvlwlg/image/upload`,
        { method: "POST", body: formData }
    );

    if (!response.ok) {
        const errorData = await response.json();
        console.error("Cloudinary Error:", errorData);
        throw new Error("Image upload failed");
    }

    const data = await response.json();
    return data.secure_url;
};