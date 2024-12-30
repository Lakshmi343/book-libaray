// import React, { useState } from "react";

// const CreateBook = () => {
//     const [title, setTitle] = useState("");
//     const [author, setAuthor] = useState(""); 
//     const [category, setCategory] = useState("");
//     const [theme, setTheme] = useState("");
//     const [description, setDescription] = useState("");
//     const [publishedYear, setPublishedYear] = useState("");
//     const [copiesAvailable, setCopiesAvailable] = useState("");
//     const [bookImage, setBookImage] = useState(null);
//     const [imagePreview, setImagePreview] = useState(null);
//     const [submitted, setSubmitted] = useState("");

//     const createBook = async (e) => {
//         e.preventDefault();

//         if (!title || !author || !category || !description || !publishedYear || !copiesAvailable) {
//             setSubmitted("Please fill in all required fields.");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("title", title);
//         formData.append("author", author);
//         formData.append("category", category);
//         formData.append("theme", theme);
//         formData.append("description", description);
//         formData.append("publishedYear", publishedYear);
//         formData.append("copiesAvailable", copiesAvailable);
//         formData.append("bookImage", bookImage);

//         try {
//             const response = await fetch("http://localhost:4000/api/book/createbook", {
//                 method: "POST",
//                 body: formData,
//             });

//             if (response.ok) {
//                 setSubmitted("Book created successfully!");
//                 setTitle("");
//                 setAuthor("");
//                 setCategory("");
//                 setTheme("");
//                 setDescription("");
//                 setPublishedYear("");
//                 setCopiesAvailable("");
//                 setBookImage(null);
//                 setImagePreview(null);
//             } else {
//                 const data = await response.json();
//                 setSubmitted(data.message || "Failed to create book. Please try again.");
//             }
//         } catch (error) {
//             console.error(error);
//             setSubmitted("An error occurred. Please try again.");
//         }
//     };

//     const handleImageChange = (e) => {
//         if (e.target.files && e.target.files[0]) {
//             setBookImage(e.target.files[0]);
//             setImagePreview(URL.createObjectURL(e.target.files[0]));
//         }
//     };

//     return (
//         <div className="container" style={{width:'60vw'}}>
//             <h1>Create Book</h1>
//             <p>This form allows you to create a new book and upload its details to the database.</p>

//             {submitted && <p>{submitted}</p>}

//             <form onSubmit={createBook} className="my-form" >
//                 <div >
//                     <label>Title *</label>
//                     <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
//                 </div>

//                 <div>
//                     <label>Author *</label>
//                     <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
//                 </div>

//                 <div>
//                     <label>Category *</label>
//                     <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
//                 </div>

//                 <div>
//                     <label>Theme</label>
//                     <input type="text" value={theme} onChange={(e) => setTheme(e.target.value)} />
//                 </div>

//                 <div>
//                     <label>Description *</label>
//                     <textarea rows="4" value={description} onChange={(e) => setDescription(e.target.value)} required />
//                 </div>

//                 <div>
//                     <label>Published Year *</label>
//                     <input type="number" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} required />
//                 </div>

//                 <div>
//                     <label>Copies Available *</label>
//                     <input type="number" value={copiesAvailable} onChange={(e) => setCopiesAvailable(e.target.value)} required />
//                 </div>

//                 <div>
//                     <label>Upload Image</label>
//                     {imagePreview && <img src={imagePreview} alt="Preview" width="100" />}
//                     <input type="file" accept="image/*" onChange={handleImageChange} />
//                 </div>

//                 <button type="submit">Create Book</button>
//             </form>
//         </div>
//     );
// };

// export default CreateBook;
import React, { useState } from "react";

const CreateBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [theme, setTheme] = useState("");
    const [description, setDescription] = useState("");
    const [publishedYear, setPublishedYear] = useState("");
    const [copiesAvailable, setCopiesAvailable] = useState("");
    const [bookImage, setBookImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [submitted, setSubmitted] = useState("");

    const createBook = async (e) => {
        e.preventDefault();

        if (!title || !author || !category || !description || !publishedYear || !copiesAvailable) {
            setSubmitted("Please fill in all required fields.");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("author", author);
        formData.append("category", category);
        formData.append("theme", theme);
        formData.append("description", description);
        formData.append("publishedYear", publishedYear);
        formData.append("copiesAvailable", copiesAvailable);
        if (bookImage) {
            formData.append("bookImage", bookImage);
        }

        try {
            const response = await fetch("http://localhost:4000/api/book/createbook", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setSubmitted("Book created successfully!");
                setTitle("");
                setAuthor("");
                setCategory("");
                setTheme("");
                setDescription("");
                setPublishedYear("");
                setCopiesAvailable("");
                setBookImage(null);
                setImagePreview(null);
            } else {
                const data = await response.json();
                setSubmitted(data.message || "Failed to create book. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setSubmitted("An error occurred. Please try again.");
        }
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setBookImage(e.target.files[0]);
            setImagePreview(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <div className="container" style={{ width: "60vw" }}>
            <h1>Create Book</h1>
            <p>This form allows you to create a new book and upload its details to the database.</p>

            {submitted && <p>{submitted}</p>}

            <form onSubmit={createBook} className="my-form">
                <div>
                    <label>Title *</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>

                <div>
                    <label>Author *</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>

                <div>
                    <label>Category *</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </div>

                <div>
                    <label>Theme</label>
                    <input type="text" value={theme} onChange={(e) => setTheme(e.target.value)} />
                </div>

                <div>
                    <label>Description *</label>
                    <textarea rows="4" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>

                <div>
                    <label>Published Year *</label>
                    <input type="number" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} required />
                </div>

                <div>
                    <label>Copies Available *</label>
                    <input type="number" value={copiesAvailable} onChange={(e) => setCopiesAvailable(e.target.value)} required />
                </div>

                <div>
                    <label>Upload Image</label>
                    {imagePreview && <img src={imagePreview} alt="Preview" width="100" />}
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>

                <button type="submit">Create Book</button>
            </form>
        </div>
    );
};

export default CreateBook;
