import { useState } from "react";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Pill from "../components/Pill";
import tags from "../config/tags.json";
import challenges from "../config/challenges.json";
import ChallengeCard from "../components/ChallengeCard";

const Home = ({ setIsLoggedIn }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [checkedTags, setCheckedTags] = useState([]);
  const [allChallenges, setAllChallenges] = useState(challenges);
  const [filterValue, setFilterValue] = useState("");

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
    setAllChallenges(allChallenges.concat(data));
    console.log({ allChallenges });
    setTitle("");
    setDescription("");
    setCheckedTags([]);
  };

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilterValue(value);
    if (value === "high") {
      const sorted = [...allChallenges].sort(
        (a, b) => b.upvotes.length - a.upvotes.length
      );
      setAllChallenges(sorted);
    }
    if (value === "low") {
      const sorted = [...allChallenges].sort(
        (a, b) => a.upvotes.length - b.upvotes.length
      );
      setAllChallenges(sorted);
    }
    if (value === "oldest") {
      const sorted = [...allChallenges].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      setAllChallenges(sorted);
    }
    if (value === "latest") {
      const sorted = [...allChallenges].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setAllChallenges(sorted);
    }
  };

  return (
    <div className="h-screen w-screen">
      <Navbar isHome={true} setIsLoggedIn={setIsLoggedIn} />
      <div className="mt-8 flex w-full justify-center">
        <div className="w-1/2 rounded-lg border border-slate-400 p-6">
          <h1 className="mb-10 text-3xl font-bold">Create new challenge</h1>
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
      <div className="container mx-auto mt-5">
        <h1 className="mb-8 text-3xl font-bold">All Challenges</h1>
        <div className="container mx-auto">
          <div className="mb-4 flex items-center">
            <p className="mr-2 text-xl">Sort By:</p>
            <select
              onChange={handleFilterChange}
              value={filterValue}
              name="listFilter"
              id="listFilter"
            >
              <option value="">---</option>
              <option value="high">Upvotes: High to Low</option>
              <option value="low">Upvotes: Low to High</option>
              <option value="latest">Date: Latest</option>
              <option value="oldest">Date: Oldest</option>
            </select>
          </div>
          {allChallenges?.map((challenge) => (
            <ChallengeCard
              listKey={challenge.createdAt}
              title={challenge.title}
              description={challenge.description}
              upvotes={challenge.upvotes}
              createdAt={challenge.createdAt}
              tags={challenge.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
