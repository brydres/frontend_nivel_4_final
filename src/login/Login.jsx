export default function Login() {
  return (
    <div>
      <div className="flex h-screen justify-center lg:items-center w-screen">
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
              <p className="font-semibold text-lg">Login</p>
            </div>
            <div>
              <form
                action="http://127.0.0.1:8000/api/login"
                className="flex flex-col gap-3"
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

                {/* <p className="text-center  text-red-700">&#160;
                       
                    </p> */}
                <button className="text-white w-full bg-[#2F80ED] h-[38px] rounded-lg">
                  Login
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
              <div className="mt-[27px] flex flex-row mb-20">
                <p className="text-[#828282]">Don’t have an account yet?</p>
                <a href="/register" className="text-[#2D9CDB]">
                  Register
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-[375px] text-[#BDBDBD]">
            <p className="text-sm">created by Brydres</p>
            <p className="text-sm">devChallenges.io</p>
          </div>
        </main>
      </div>
    </div>
  );
}
