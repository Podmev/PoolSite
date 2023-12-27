import "./Header.scss";

export default function Header({ lang, onLangChanged }) {
  return (
    <header className="header">
      <select value={lang} onChange={(e) => onLangChanged(e.target.value)}>
        <option value="pt">
          Portuguese
          {/* <Flag code="br" alt="Brazil" /> */}
        </option>
        <option value="en">
          English
          {/* <Flag code="gb" alt="Great Britain" /> */}
        </option>
        <option value="ru">
          Русский
          {/* <Flag code="ru" alt="Russia" /> */}
        </option>
      </select>
    </header>
  );
}

// // doesn't work in option - need to change for div instead of select
// function Flag({ code, alt }) {
//   return (
//     <img
//       src={`https://flagcdn.com/16x12/${code}.png`}
//       //srcset={`https://flagcdn.com/32x24/${code}.png 2x, https://flagcdn.com/48x36/${code}.png 3x`}
//       width="16"
//       height="12"
//       alt={alt}
//     />
//   );
// }
