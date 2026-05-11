export default function App() {
  return (
    <div className="min-h-screen bg-orange-50 text-gray-800">
      {/* Hero */}
      <section className="relative bg-white">
        <img
    src="/logo-main.png"
    alt="太陽の花 ロゴ"
    className="absolute top-6 left-6 w-56 z-10"
  />
  <img
    src="/hero-full.png"
    alt="放課後等デイサービス 太陽の花"
    className="w-full h-auto"
  />

  {/* 見学応募ボタン */}
  <a
    href="https://lin.ee/あなたのLINE"
    target="_blank"
    className="absolute left-[7%] bottom-[12%] w-[18%] h-[6%]"
  >
  </a>

  {/* LINE相談ボタン */}
  <a
    href="https://lin.ee/あなたのLINE"
    target="_blank"
    className="absolute left-[28%] bottom-[12%] w-[18%] h-[6%]"
  >
  </a>
</section>
      {/* Message */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-orange-500 leading-tight">
            「療育って難しそう…」
            <br />
            そんな方も大丈夫です。
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            太陽の花では、子ども達と一緒に遊び、学び、成功体験を積み重ねることを大切にしています。
            大事なのは“完璧な知識”よりも、子どもの気持ちを受け止めようとする姿勢。
            職員同士で相談しやすい環境づくりを心がけているため、未経験からスタートしたスタッフも活躍しています。
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-orange-500">太陽の花で働く魅力</h2>
            <p className="mt-4 text-gray-500">子ども達と一緒に、スタッフも成長できる環境です。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '子どもの成長を近くで感じられる',
                text: '「話せた」「出来た」「友達と遊べた」そんな小さな成長を毎日一緒に喜べる仕事です。'
              },
              {
                title: 'AIやICTも積極活用',
                text: '記録業務や制作、広報などにもAIを活用。職員の負担軽減にも力を入れています。'
              },
              {
                title: 'キャリアアップも可能',
                text: '児童指導員・保育士・管理者など、将来のキャリア形成もサポートします。'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-orange-50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 bg-orange-400 rounded-2xl mb-6" />
                <h3 className="text-2xl font-bold text-orange-500 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-8">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day Flow */}
      <section className="py-20 px-6 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-orange-500">1日の流れ</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              ['9:30', '出勤・準備'],
              ['14:00', '学校へお迎え'],
              ['15:00', '療育・活動支援'],
              ['18:30', '記録・退勤']
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-md text-center border border-orange-100">
                <div className="text-3xl font-black text-orange-500">{item[0]}</div>
                <div className="mt-4 text-lg font-semibold text-gray-700">{item[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment */}
      <section id="entry" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-orange-500 rounded-[40px] p-10 lg:p-16 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-black leading-tight">
                一緒に、
                <br />
                子ども達の未来を
                <br />
                支えませんか？
              </h2>

              <p className="mt-6 leading-8 text-orange-50">
                子どもが好き。
                誰かの役に立つ仕事がしたい。
                そんな想いがあれば大歓迎です。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-gray-700">
              <h3 className="text-2xl font-bold text-orange-500 mb-6">募集要項</h3>

              <div className="space-y-5 text-sm leading-7">
                <div>
                  <span className="font-bold">募集職種：</span>
                  保育士 / 児童指導員 / 作業療法士 / 理学療法士 / 言語聴覚士
                </div>

                <div>
                  <span className="font-bold">月給：</span>
                  245,400円〜275,400円
                  <div className="text-xs text-gray-500 mt-1">
                    ※資格・経験等により変動
                  </div>
                </div>

                <div>
                  <span className="font-bold">賞与：</span>
                  年2回（6月・12月）
                </div>

                <div>
                  <span className="font-bold">休日：</span>
                  完全週休2日制（土日祝）
                  <div className="text-xs text-gray-500 mt-1">
                    年間休日120日以上 / GW / お盆 / 年末年始 / バースデー休暇
                  </div>
                </div>

                <div>
                  <span className="font-bold">勤務地：</span>
                  伊勢崎市内のいずれかの店舗
                  <div className="text-xs text-gray-500 mt-1">
                    ※ご希望や適性を考慮し決定
                  </div>
                </div>

                <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
                  <div className="font-bold text-orange-500 mb-2">
                    現在、市内に2店舗展開中！
                  </div>
                  <div className="text-sm leading-7">
                    2026年秋には伊勢崎市内に
                    <span className="font-bold text-orange-500">3店舗目がニューオープン予定！</span>
                  </div>
                </div>

                <div>
                  <span className="font-bold">有給取得率：</span>
                  取得しやすい環境づくりを推進中
                  <div className="text-xs text-gray-500 mt-1">
                    プライベートや家庭も大切にしながら働けます
                  </div>
                </div>

                <div>
                  <span className="font-bold">勤務地例：</span>
                  群馬県伊勢崎市境下武士472-1 等（車通勤可）
                </div>
              </div>

              <a href="https://lin.ee/YOGpBku" className="block text-center w-full mt-8 bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-2xl text-lg font-bold shadow-lg">
                応募・見学予約をする
              </a>
              <p className="text-xs text-gray-400 mt-3 text-center">
                ※LINEや応募フォームのURLは後から差し替えできます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-black text-orange-400">放課後等デイサービス 太陽の花</div>
            <div className="mt-2 text-gray-400 text-sm">
              群馬県伊勢崎市境下武士472-1
            </div>
          </div>

          <div className="flex gap-4">
            <a href="tel:" className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-xl font-bold">
              電話で問い合わせ
            </a>
            <a href="https://lin.ee/YOGpBku" className="border border-gray-600 hover:bg-gray-800 transition px-6 py-3 rounded-xl font-bold">
              LINE相談
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
