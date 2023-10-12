export default function Register() {
  return (
    <div>
      <body className="flex h-screen justify-center lg:items-center w-screen">
        <main className="w-[375px] lg:w-[1200px] flex flex-col items-center md:justify-center p-[17px]">
          <div className="lg:w-[474px] lg:border lg:border-[#BDBDBD] lg:rounded-3xl flex flex-col lg:px-[58px] lg:py-[45px]">
            <div>
              <img
                src="../public/icons/devchallenges-light.svg"
                alt="devchallenges"
                className="lg:w-[130px] mb-[27px]"
              />
              
            </div>
            <div>
              <p className="font-semibold text-lg mb-4">
                Join thousands of learners from around the world
              </p>
              <p className="font-normal text-base">
                Master web development by making real-life projects. There are
                multiple paths for you to choose
              </p>
            </div>
            <div>
              <form
                action="http://127.0.0.1:8000/api/register"
                className="flex flex-col gap-3"
                name="form"
                method="post"
              >
                <div className="flex border border-[#BDBDBD] h-[48px] pl-3 gap-3 rounded-xl mt-7">
                  <img
                    src="../public/icons/mail.svg"
                    alt="icono mail"
                    className="w-6"
                  />
                  <input
                    type="text"
                    className="outline-none w-full h-full rounded-xl"
                    placeholder="Email"
                    name="usuario"
                  />
                </div>
                <div className="flex border border-[#BDBDBD] h-[48px] pl-3 gap-3 rounded-xl">
                  <img
                    src="../public/icons/lock.svg"
                    alt="icono candado"
                    className="w-6"
                  />
                  <input
                    type="password"
                    className="outline-none w-full rounded-xl"
                    placeholder="Password"
                    name="clave"
                  />
                </div>
                {/* <div className=" text-red-600">
                        
                    </div> */}
                <button className="text-white w-full bg-[#2F80ED] h-[38px] rounded-lg mt-3">
                  Start coding now
                </button>
              </form>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="p-7 text-[#828282]">
                or continue with these social profile
              </p>
              <div className="flex flex-row gap-5">
                <img src="../public/icons/Google.svg" alt="" />
                <img src="../public/icons/Facebook.svg" alt="" />
                <img src="../public/icons/Twitter.svg" alt="" />
                <img src="../public/icons/Gihub.svg" alt="" />
              </div>
              <div className="mt-[27px] flex flex-row mb-16 gap-1">
                <p className="text-[#828282]">Adready a member?</p>
                <a href="/" className="text-[#2D9CDB]">
                  Login
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between text-[#BDBDBD] w-[375px]">
            <p className="text-sm">created by Brydres</p>
            <p className="text-sm">devChallenges.io</p>
          </div>
        </main>
      </body>
    </div>
  );
}
