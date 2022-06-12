export default function ProductCard({ name, price, creator, image, category}) {
  return (
    <div>
      <div>
        <img src={image} alt={name} width="600" height="600"/>
      </div>

      <div>
        <h4>{name}</h4>
      </div>
      <div>
        <h6>{price}</h6>
      </div>
      <div>
        <p>
          {creator}
        </p>
      </div>
      <div>
        <p>{category}</p>
      </div>
    </div>
  )
}