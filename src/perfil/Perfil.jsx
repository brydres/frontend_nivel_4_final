import { Dropdown } from "flowbite-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Perfil() {
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
                <a href={"/dashboard/" + usuario.rol_id}>Dashboard</a>
              </div>
            </Dropdown>
          </div>
        </nav>
        <div>
          <div className="flex flex-col justify-center items-center mt-4">
            <h1 className="font-normal text-2xl">Personal info</h1>
            <p className="text-sm font-light">
              Basic info, like your name and photo
            </p>
          </div>
          <div className="w-screen md:w-[845px] md:border md:border-[#D3D3D3] rounded-xl">
            <div className="flex flex-row justify-between items-center mt-6 px-5">
              <div className="w-[180px]">
                <h2 className="text-2xl font-normal">Profile</h2>
                <p className="text-[13px] text-[#828282]">
                  Some info may be visible to other people
                </p>
              </div>
              <div>
                <a href={"/editarperfil/" + usuario.id}>
                  <button className="border border-[#828282] w-[95px] h-[35px] rounded-xl">
                    Edit
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between px-7 py-7 border-b border-[#E0E0E0] md:justify-start">
              <p className="text-[#BDBDBD] md:w-[240px]">USUARIO / CORREO</p>
              <p>{usuario.usuario}</p>
            </div>
            <div className="flex flex-row items-center justify-between px-7 py-7 border-b border-[#E0E0E0] md:justify-start">
              <p className="text-[#BDBDBD] md:w-[240px]">NOMBRES</p>
              <p>{persona.primer_nombre + " " + persona.segundo_nombre}</p>
            </div>
            <div className="flex flex-row items-center justify-between px-7 py-7 border-b border-[#E0E0E0] md:justify-start">
              <p className="text-[#BDBDBD] md:w-[240px]">APELLIDOS</p>
              <p>{persona.primer_apellido + " " + persona.segundo_apellido}</p>
            </div>
            <div className="flex flex-row items-center justify-between px-7 py-7 border-b border-[#E0E0E0] md:justify-start">
              <p className="text-[#BDBDBD] md:w-[240px]">PASSWORD</p>
              <p>*********</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
