export default function Circles({ img, alt, text }) {
  return (
    <>
      <div>
        <div>
          <img src={img} alt={alt} />
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
