import { useRouteError } from "react-router-dom";
import photo from "../../assets/photos/error.png"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="container mx-auto items-center text-center my-20 p-20 rounded lg:w-2/4 lg:mt-[5%] ">
      <h1 className=" text-4xl font-semibold">Oops!</h1>
      <img src={photo} alt="" />
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}