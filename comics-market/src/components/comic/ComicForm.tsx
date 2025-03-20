import React, { useState } from "react";
import Comic from "../../types";
import User from "../../types";
import { X, Search } from "lucide-react";

interface ComicFormProps {
  onSubmit: (comic: Omit<Comic, "ISBN">) => void;
  onCancel: () => void;
  initialData?: Comic;
  users: User[];
  onfindComic: (name: string) => Promise<User[]>;
}

export const ComicForm: React.FC<ComicFormProps> = ({
  onSubmit,
  onCancel,
  initialData,
  users,
  onfindComic,
}) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    urlImage: initialData?.urlImage || "",
    author: initialData?.author || "",
    editorial: initialData?.editorial || "",
    genre: initialData?.genre || "",
    description: initialData?.description || "",
    price: initialData?.price || 0,
    //user: initialData?.user || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //onSubmit(formData);
  };

  return (
    <div className="comic-form">
      <h2>{initialData ? "Edit Comic" : "Add New Comic"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Editorial"
          value={formData.editorial}
          onChange={(e) =>
            setFormData({ ...formData, editorial: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Genre"
          value={formData.genre}
          onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: +e.target.value })}
        />
        <input
          type="text"
          placeholder="URL Image"
          value={formData.urlImage}
          onChange={(e) =>
            setFormData({ ...formData, urlImage: e.target.value })
          }
        />
        //todo: here we should add the user select
        <button type="submit">{initialData ? "Update" : "Add"} Comic</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ComicForm;
