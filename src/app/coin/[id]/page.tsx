export default function Page({ params }: { params: { id: string | string[] } }) {
  return (
    <div>
      <h1>상세 페이지</h1>
      <span>{params.id}</span>
    </div>
  );
}
