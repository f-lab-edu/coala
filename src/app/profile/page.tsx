import UserInfo from '../(home)/_components/UserInfo';

export default function Page() {
  return (
    <div className="mx-auto max-w-[600px] p-4">
      {/* 프로필 섹션 */}
      <UserInfo />

      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-bold">자산 정보</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded bg-base-100 p-4 shadow">
            <h3 className="text-lg font-semibold">총 자산</h3>
            <p className="text-gray-700">₩10,000,000</p>
          </div>
          <div className="rounded bg-base-100 p-4 shadow">
            <h3 className="text-lg font-semibold">총 손익</h3>
            <p className="text-gray-700">₩500,000 (5%)</p>
          </div>
        </div>
      </section>

      {/* 설정 섹션 */}
      <section>
        <div className="space-y-4">
          <button className="btn no-animation btn-block">로그아웃</button>
        </div>
      </section>
    </div>
  );
}
