interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

export default function Category(props: CategoryProps) {
  // console.log(props)

  const { categories } = props.params;

  // Simular error para mostrar la página de error
  // throw new Error('Error: Boom');

  return <h1>Categoria dinamica: {categories}</h1>;
}
