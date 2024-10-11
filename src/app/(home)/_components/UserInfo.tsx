import { getUserProfileAction } from '@/_actions/users/getUserProfile.action';

export default async function UserInfo() {
  const userProfile = await getUserProfileAction();

  return (
    <div className="mb-6 flex items-center space-x-4">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={userProfile.picture} />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Lillie-May Mcdonnell</h2>
        <p className="text-sm text-gray-500">{userProfile.email}</p>
      </div>
    </div>
  );
}
