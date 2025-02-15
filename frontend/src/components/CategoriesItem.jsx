export default function CategoriesItem({
  activeCategory,
  setActiveCategory,
  name,
  index,
}) {
  return (
    <li
      onClick={() => setActiveCategory(index)}
      className={
        activeCategory === index
          ? "todo-categories-btn todo-categories-btn__active"
          : "todo-categories-btn"
      }
    >
      {name}
    </li>
  );
}
