import { Dropdown } from "flowbite-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function EditPerfil() {
  const parametros = useParams();
  const [usuario, setUsuario] = useState([]);
  const [persona, setPersona] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/usuarios/" + parametros.id)
      .then((response) => {
        setUsuario(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/personas/" + parametros.id)
      .then((response) => {
        setPersona(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <main className="flex flex-col items-center justify-center">
        <nav className="flex items-center justify-center">
          <div className="flex flex-row justify-between items-center w-screen h-16 px-7">
            <img
              src="../public/icons/devchallenges-light.svg"
              alt="devchallenges"
            />

            <Dropdown inline label="Admin">
              <div className=" m-4">
                <a href={"/perfil/" + parametros.id}>My Profile</a>
              </div>
              <div className=" m-4">
                <a href="/">Logout</a>
              </div>
              <div className=" m-4">
                <a href={"/dashboard/" + parametros.id}>Dashboard</a>
              </div>
            </Dropdown>
          </div>
        </nav>
        <div>
          <div className="flex flex-col justify-center items-start my-4 ">
            <a
              href={"/perfil/" + parametros.id}
              className=" text-[#2D9CDB] ml-2"
            >
              {"<"} Back
            </a>
          </div>
          <div className="w-screen md:w-[845px] md:border md:border-[#D3D3D3] rounded-xl pr-10">
            <div className="flex flex-row justify-between items-center mt-6 px-5">
              <div className="w-full">
                <h2 className="text-2xl font-normal">Change Info</h2>
                <p className="text-[13px] text-[#828282]">
                  Changes will be reflected to every services
                </p>
              </div>
            </div>
            <form
              className="py-6 pl-12"
              method="post"
              action={
                "http://127.0.0.1:8000/api/usuarios/update/" + parametros.id
              }
              encType="multipart/form-data"
            >
              <div className=" flex flex-col my-3">
                <label htmlFor="">Primer Nombre</label>
                <input
                  name="primer_nombre"
                  type="text"
                  placeholder="Enter your name..."
                  className="  border border-[#BDBDBD] w-full md:w-[416px] h-[52px] pl-4 rounded-xl"
                  defaultValue={persona.primer_nombre}
                />
              </div>
              <div className=" flex flex-col my-3">
                <label htmlFor="">Segundo Nombre</label>
                <input
                  name="segundo_nombre"
                  type="text"
                  placeholder="Enter your name..."
                  className="  border border-[#BDBDBD] w-full md:w-[416px] h-[52px] pl-4 rounded-xl"
                  defaultValue={persona.segundo_nombre}
                />
              </div>
              <div className=" flex flex-col my-3">
                <label htmlFor="">Primer Apellido</label>
                <input
                  name="primer_apellido"
                  type="text"
                  placeholder="Enter your name..."
                  className="  border border-[#BDBDBD] w-full md:w-[416px] h-[52px] pl-4 rounded-xl"
                  defaultValue={persona.primer_apellido}
                />
              </div>
              <div className=" flex flex-col my-3">
                <label htmlFor="">Segundo Apellido</label>
                <input
                  name="segundo_apellido"
                  type="text"
                  placeholder="Enter your name..."
                  className="  border border-[#BDBDBD] w-full md:w-[416px] h-[52px] pl-4 rounded-xl"
                  defaultValue={persona.segundo_apellido}
                />
              </div>

              <div className=" flex flex-col my-3">
                <label htmlFor="">Email</label>
                <input
                  name="usuario"
                  type="text"
                  placeholder="Enter your email..."
                  className=" border border-[#BDBDBD] w-full md:w-[416px] h-[52px] pl-4 rounded-xl"
                  defaultValue={usuario.usuario}
                  required
                />
              </div>
              <div className=" flex flex-col my-3">
                <label htmlFor="">Password</label>
                <input
                  name="clave"
                  type="password"
                  placeholder="Enter your new password..."
                  className=" border border-[#BDBDBD] w-full md:w-[416px] h-[52px] pl-4 rounded-xl"
                  defaultValue={usuario.clave}
                  required
                />
              </div>
              <button className=" bg-[#2F80ED] text-white w-[82px] h-[38px] rounded-lg">
                Save
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
