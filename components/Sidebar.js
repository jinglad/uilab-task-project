import Link from "next/link";
import { styled } from "@material-ui/styles";
import Image from "next/image";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Link href="/">
        <Logo>Gull</Logo>
      </Link>

      <Link href="/dashboard">
        <MenuItem>
          <Image width={20} height={20} src="/icons/first.png" alt="Dashboard" />
          <MenuTitle>Dashboard</MenuTitle>
        </MenuItem>
      </Link>
      <Link href="/table">
        <MenuItem>
          <Image width={20} height={20} src="/icons/second.png" alt="Dashboard" />
          <MenuTitle>Table Data</MenuTitle>
        </MenuItem>
      </Link>
      <MenuItem>
        <Image width={20} height={20} src="/icons/third.png" alt="Dashboard" />
        <MenuTitle>Customer Care</MenuTitle>
      </MenuItem>
      <MenuItem>
        <Image width={20} height={20} src="/icons/four.png" alt="Dashboard" />
        <MenuTitle>Notes Data</MenuTitle>
      </MenuItem>
      <MenuItem>
        <Image width={20} height={20} src="/icons/five.png" alt="Dashboard" />
        <MenuTitle>All Mails</MenuTitle>
      </MenuItem>
      <MenuItem>
        <Image width={20} height={20} src="/icons/six.png" alt="Dashboard" />
        <MenuTitle>Users Click</MenuTitle>
      </MenuItem>
      <MenuItem>
        <Image width={20} height={20} src="/icons/seven.png" alt="Dashboard" />
        <MenuTitle>All Users</MenuTitle>
      </MenuItem>
      <MenuItem>
        <Image width={20} height={20} src="/icons/eight.png" alt="Dashboard" />
        <MenuTitle>Clouds Service</MenuTitle>
      </MenuItem>
      <MenuItem>
        <Image width={20} height={20} src="/icons/nine.png" alt="Dashboard" />
        <MenuTitle>Help Line</MenuTitle>
      </MenuItem>
      <MenuItem>
        <Image width={20} height={20} src="/icons/ten.png" alt="Dashboard" />
        <MenuTitle>Contact US</MenuTitle>
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled("div")({
  width: "10%",
  background: "#663399",
  height: "100vh",
});

const Logo = styled("h4")({
  fontSize: "30px",
  fontWeight: 600,
  marginBottom: "20px",
  paddingTop: "20px",
  textAlign: "center",
  color: "white",
  cursor: "pointer",
});

const MenuItem = styled("button")({
  padding: "20px",
  display: "block",
  margin: "0 auto",
  backgroundColor: "#663399",
  border: "none",
  color: "white",
  transition: "0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    background: "#7d48b1",
    borderRadius: "5px",
  },
});

const MenuTitle = styled("h6")({
  fontSize: "12px",
  marginTop: "5px",
});
