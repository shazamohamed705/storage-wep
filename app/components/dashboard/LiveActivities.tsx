'use client';

export default function LiveActivities() {
  const activities = [
    {
      service: 'متابع حقيقي 10K',
      platform: 'سناب شات',
      status: '● جاري التنفيذ',
      statusColor: 'text-pink-500',
      progress: 65,
      progressColor: 'bg-purple-500'
    },
    {
      service: 'مشاهدة ريلز 50K',
      platform: 'إنستاجرام',
      status: 'مكتمل',
      statusColor: 'text-green-500',
      progress: 100,
      progressColor: 'bg-green-500'
    },
    {
      service: 'إكسبلور FYP',
      platform: 'تيك توك',
      status: '● بدأ التو',
      statusColor: 'text-yellow-500',
      progress: 20,
      progressColor: 'bg-yellow-500'
    }
  ];

  return (
    <div className="lg:col-span-2 bg-[#0f0f0f] border border-gray-800 rounded-xl p-4 w-full">
      <h3 className="text-lg font-bold mb-4 text-right">نشاط البوتات المباشر</h3>
      <div className="space-y-4">
        {/* Column Headers - hidden on mobile */}
        <div className="hidden sm:grid grid-cols-4 text-sm text-gray-500 pb-2 border-b border-gray-800 text-right">
          <span>الخدمة</span>
          <span>المنصة</span>
          <span>التقدم</span>
          <span>الحالة</span>
        </div>

        {activities.map((activity, index) => (
          <div key={index}>
            {/* Mobile layout */}
            <div className="sm:hidden flex items-center justify-between py-2">
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex justify-between items-center">
                  <span className={`text-xs ${activity.statusColor}`}>{activity.status}</span>
                  <span className="text-sm font-medium">{activity.service}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">{activity.progress}%</span>
                  <div className="flex-1 bg-gray-800 rounded-full h-1.5">
                    <div className={`${activity.progressColor} h-1.5 rounded-full`} style={{ width: `${activity.progress}%` }}/>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden sm:grid grid-cols-4 items-center text-right gap-4 py-4">
              <span className="text-sm font-medium text-white">{activity.service}</span>
              <span className="text-sm text-purple-400">{activity.platform}</span>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-800 rounded-full h-2">
                  <div className={`${activity.progressColor} h-2 rounded-full`} style={{ width: `${activity.progress}%` }}/>
                </div>
                <span className="text-xs text-gray-400 min-w-[35px]">{activity.progress}%</span>
              </div>
              <span className={`text-sm ${activity.statusColor}`}>{activity.status}</span>
            </div>

            {index < activities.length - 1 && <div className="border-b border-gray-800"></div>}
          </div>
        ))}

        <button className="w-full text-center text-purple-500 text-sm hover:text-purple-400 transition-colors mt-2">
          + عرض كل الطلبات
        </button>
      </div>
    </div>
  );
}
