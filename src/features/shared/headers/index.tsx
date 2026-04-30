import {
  BellIcon,
  ChatBubbleIcon,
  ExitIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { IMAGES } from "../../../assets/images/images";
import { CustomAvatar } from "../../../components/common/avtar";
import CustomDropdown from "../../../components/common/dropdown";
import { Typography } from "../../../components/common/typography";
import { SearchField } from "../../../components/forms/search-field";
import * as Form from "@radix-ui/react-form";

const items = [
  <div className="flex items-center gap-2">
    <CustomAvatar src={IMAGES.USER} alt="user image" size="md" name="user" />
    <div>
      <Typography>rajat@yomail.com</Typography>
      <Typography>RAJAT</Typography>
    </div>
  </div>,
  <div className="flex justify-between items-center">
    <Typography>Logout</Typography>
    <ExitIcon className="w-4 h-4 text-gray-dark" />
  </div>,
];

const Header = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  return (
    <div className="py-2 px-5 flex md:items-center gap-5 justify-between flex-col-reverse lg:flex-row shadow-sm items-end ">
      <div className="w-full lg:w-auto">
        <Form.Root>
          <SearchField
            value={""}
            onDebouncedChange={() => {}}
            placeholder="Search ..."
          />
        </Form.Root>
      </div>
      <div className="flex items-center gap-5 lg:gap-10 w-full lg:w-auto justify-between lg:justify-items-normal">
        <div
          onClick={onMenuClick}
          className="rounded-full lg:hidden shadow lg:w-9 lg:h-9 w-7 h-7  flex justify-center items-center cursor-pointer"
        >
          <HamburgerMenuIcon className=" w-4 h-4 text-gray-dark " />
        </div>
        <div className="flex items-center gap-5 lg:gap-10">
          <div className="flex items-center gap-5">
            <div className="rounded-full shadow lg:w-9 lg:h-9 w-7 h-7  flex justify-center items-center cursor-pointer">
              <BellIcon className=" w-4 h-4 text-gray-dark " />
            </div>
            <div className="rounded-full shadow lg:w-9 lg:h-9 w-7 h-7  flex justify-center items-center cursor-pointer">
              <ChatBubbleIcon className="w-4 h-4 text-gray-dark " />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <Typography>rajat@yomail.com</Typography>
              <Typography>RAJAT</Typography>
            </div>
            <CustomDropdown
              items={items}
              trigger={
                <button className="">
                  <CustomAvatar
                    src={IMAGES.USER}
                    alt="user image"
                    size="md"
                    name="user"
                  />
                </button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
