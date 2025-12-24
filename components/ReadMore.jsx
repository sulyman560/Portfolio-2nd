import { useState } from "react";

const ReadMore = ({ text, limit = 40 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = text.match(/\b[\w'-]+\b/g) || [];
  const isLongText = words.length > limit;

  const displayedText = isExpanded
    ? text
    : words.slice(0, limit).join(" ");

  return (
    <div>
      <p className="text-gray-400 text-sm leading-relaxed">
        {displayedText}
        {!isExpanded && isLongText && "..."}
      </p>

      {isLongText && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-1 text-indigo-400 text-sm hover:underline"
        >
          {isExpanded ? "Show Less" : "More"}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
