import Input from "@/components/Input";
import { SubmitHandler, useForm } from "react-hook-form";

export interface FormLogin {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLogin>();

  const onSubmit: SubmitHandler<FormLogin> = (data) => {
    console.log(data);
  };

  return (
    <section className="h-screen bg-gradient-to-r from-purple-600 to-purple-900">
      <div className="h-full w-full">
        <div className="g-6 flex m-auto w-full text-center h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="md:w-8/12 lg:w-5/12 xl:w-5/12 shadow-sm bg-white p-10 rounded-lg m-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex m-auto flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg text-black">Sign in with</p>
              </div>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>

              <div className="relative mb-6">
                <Input
                  register={register}
                  name="email"
                  type="email"
                  validation={{ required: true }}
                  placeholder="Email address"
                />
                <p className="text-red-600 pl-2 mt-1 text-left text-xs">
                  {errors.email && "Campo requerido"}
                </p>
              </div>

              <div className="relative mb-6">
                <Input
                  register={register}
                  name="password"
                  type="password"
                  validation={{ required: true }}
                  placeholder="Password"
                />
                <p className="text-red-600 mt-1 pl-2 text-left text-xs">
                  {errors.password && "Campo requerido"}
                </p>
              </div>

              <div className="text-center lg:text-left">
                <input
                  type="submit"
                  value={"Log in"}
                  className="inline-block cursor-pointer rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal bg-tremor-brand-primary text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] classNameshadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] classNamehover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] classNamefocus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] classNameactive:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
