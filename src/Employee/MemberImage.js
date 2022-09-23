const MemberImage = ({ data, borderColor }) => {
  let zIndexData = 100;
  let initialElementPosition = 0;

  return (
    <div style={{ position: "relative", display: "flex" }}>
      <div
        style={{
          left: initialElementPosition,
          top: 0,
          width: "25px",
          height: "25px",
          border: "3px  solid " + borderColor,
          borderRadius: "20px",
          backgroundColor: "#314363",
          color: "white",
          fontFamily: "Montserrat",
          fontWeight: 700,
          fontSize: "13px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: zIndexData
        }}
      >
        {data.total}
      </div>
      {data.members.map((item) => {
        zIndexData = zIndexData - 1;
        console.log(zIndexData);

        initialElementPosition += 12;
        return (
          <div
            style={{
              position: "absolute",
              left: initialElementPosition + "px",
              zIndex: zIndexData,
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "25px",
              width: "25px",
              border: "3px solid " + borderColor,
              borderRadius: "20px"
            }}
          ></div>
        );
      })}
    </div>
  );
};
export default MemberImage;
