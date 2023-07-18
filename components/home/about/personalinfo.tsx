const PersonalInfo = () => {
  return (
    <div className="mt-20 grid w-full  max-w-md grid-cols-2 place-items-center gap-8 md:mt-0 md:max-w-4xl md:grid-cols-4">
      <div className="flex flex-col">
        <span className="text-slate-300">Name:</span>
        <span className="text-lg">Iliya</span>
      </div>

      <div className="flex flex-col">
        <span className="text-slate-300">Date of birth:</span>
        <span className="text-lg">2008/5/9</span>
      </div>

      <div className="flex flex-col">
        <span className="text-slate-300">Experience:</span>
        <span className="text-lg">+3 years</span>
      </div>

      <div className="flex flex-col">
        <span className="text-slate-300">Location:</span>
        <span className="text-lg">Iran</span>
      </div>
    </div>
  );
};

export default PersonalInfo;
