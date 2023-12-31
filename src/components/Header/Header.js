import "./Header.scss";

export default function Header({ lang, onLangChanged }) {
  return (
    <header className="header">
      <select value={lang} onChange={(e) => onLangChanged(e.target.value)}>
        <option value="pt">
          Português
          {convertToFlag("br")}
        </option>
        <option value="en">
          English
          {convertToFlag("en")}
        </option>
        <option value="ru">
          Русский
          {convertToFlag("ru")}
        </option>
      </select>
    </header>
  );
}

function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
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
