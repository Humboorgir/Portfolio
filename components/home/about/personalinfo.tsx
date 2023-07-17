const PersonalInfo = () => {
  return (
    <div className="flex w-full max-w-4xl flex-wrap justify-around">
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
