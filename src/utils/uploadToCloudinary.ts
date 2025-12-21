
interface CloudinaryResponse {
    url: string;
    public_id: string;
}

export const uploadToCloudinary = async (file: File): Promise<CloudinaryResponse> => {
    const formData = new FormData();
    formData.append("file", file);

    // আপনার প্রিসেট নাম
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

    // পরিবর্তন এখানে: URL এর সাথে public_id ও রিটার্ন করা হচ্ছে
    return {
        url: data.secure_url,
        public_id: data.public_id
    };
};