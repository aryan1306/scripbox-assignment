import { useState } from "react";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Pill from "../components/Pill";
import tags from "../config/tags.json";
import challenges from "../config/challenges.json";

const Home = ({ setIsLoggedIn }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [checkedTags, setCheckedTags] = useState([]);
  const [allChallenges, setAllChallenges] = useState(challenges);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setCheckedTags([...checkedTags, value]);
    } else {
      setCheckedTags(checkedTags.filter((item) => item !== value));
    }
  };

  const handleSubmit = () => {
    const data = {
      title,
      description,
      tags: checkedTags,
      upvotes: [],
      createdAt: new Date().toISOString(),
    };
    setAllChallenges(challenges.unshift(data));
    console.log({ allChallenges });
    setTitle("");
    setDescription("");
    setCheckedTags([]);
  };

  return (
    <div className="h-screen w-screen">
      <Navbar isHome={true} setIsLoggedIn={setIsLoggedIn} />
      <div className="mt-8 flex w-full justify-center">
        <div className="w-1/2 rounded-lg border border-slate-400 p-6">
          <h1 className="mb-10 text-3xl font-semibold">Create new challenge</h1>
          <Input
            id="title"
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <div className="mt-4 flex flex-col">
            <label htmlFor="description" className="mb-1 flex justify-between">
              Description{" "}
              <span
                onClick={() => setDescription("")}
                className="pill-btn ml-1 !border px-1 text-sm"
              >
                Clear
              </span>
            </label>
            <textarea
              name="description"
              rows={4}
              id="description"
              className="rounded-md border border-blue-400 px-2 outline-none focus:ring-2 focus:ring-cyan-500"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="mt-4">
            <p className="mb-2"> Tags</p>
            <div className="flex flex-wrap items-center gap-2">
              {tags.values.map((tag) => (
                <Pill
                  key={tag.displayName}
                  label={tag.displayName}
                  id={tag.displayName}
                  value={tag.value}
                  checked={checkedTags.includes(tag.value)}
                  onChange={handleChange}
                />
              ))}
            </div>
          </div>
          <button
            type="submit"
            disabled={!title && !description}
            className="gradient-btn mt-5"
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
