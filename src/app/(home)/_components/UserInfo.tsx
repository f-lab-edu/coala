export default function UserInfo() {
  return (
    <div className="mb-6 flex items-center space-x-4">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Lillie-May Mcdonnell</h2>
        <p className="text-sm text-gray-500">hello@email.com</p>
      </div>
    </div>
  );
}
