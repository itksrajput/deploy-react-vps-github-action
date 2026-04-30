import { Form } from "radix-ui";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "../../components/common/typography";
import { SubmitButton } from "../../components/forms/submit-button";
import { PasswordField } from "../../components/forms/password-field";
import { SelectField } from "../../components/forms/select-field";
import { CheckboxField } from "../../components/forms/checkbox-field";
import { CheckboxGroupField } from "../../components/forms/checkbox-group-field";
import { TextField } from "../../components/forms/text-field";
import { CustomDialog } from "../../components/common/dialog";
import CustomDropdown from "../../components/common/dropdown";
import { NumberField } from "../../components/forms/number-field";
import { TextareaField } from "../../components/forms/textarea-field";
import { RadioGroupField } from "../../components/forms/group-radio-field";
const schema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  question: z.string().min(1, "Question is required"),
  passcode: z.string().min(1, "Passcode is required"),
  role: z.string().min(1, "role is required"),
  isAdult: z.boolean(),
  study: z.array(z.string()).min(1, "Study is required"),
  mobile: z.string(),
  bio: z.string().min(1, "bio is required"),
  age: z.string(),
});

type FormValues = z.infer<typeof schema>;

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Mango", value: "mango" },
  { label: "Orange", value: "orange" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Watermelon", value: "watermelon" },
  { label: "Grapes", value: "grapes" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Papaya", value: "papaya" },
  { label: "Lemon", value: "lemon" },
  { label: "Peach", value: "peach" },
  { label: "Cherry", value: "cherry" },
  { label: "Guava", value: "guava" },
  { label: "Avocado", value: "avocado" },
  { label: "Coconut", value: "coconut" },
  { label: "Dragon Fruit", value: "dragon-fruit" },
  { label: "Fig", value: "fig" },
  { label: "Jackfruit", value: "jackfruit" },
];

const studyOptions = [
  { label: "Computer Science", value: "computer-science" },
  { label: "Mathematics", value: "mathematics" },
  { label: "Physics", value: "physics" },
  { label: "Chemistry", value: "chemistry" },
  { label: "Biology", value: "biology" },
  { label: "Economics", value: "economics" },
  { label: "Psychology", value: "psychology" },
  { label: "Sociology", value: "sociology" },
  { label: "Philosophy", value: "philosophy" },
  { label: "Political Science", value: "political-science" },
  { label: "History", value: "history" },
  { label: "Linguistics", value: "linguistics" },
  { label: "Business Administration", value: "business-admin" },
  { label: "Engineering", value: "engineering" },
  { label: "Law", value: "law" },
  { label: "Medicine", value: "medicine" },
  { label: "Education", value: "education" },
  { label: "Environmental Science", value: "environmental-science" },
  { label: "Statistics", value: "statistics", disabled: true }, // Example disabled option
];

const items = [
  <span>🔐 Lock</span>,
  <span className="text-blue-600">Profile</span>,
  <span>Logout</span>,
];

const HowToUse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      isAdult: false,
      study: [],
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("✅ Form submitted:", data);
  };

  return (
    <div className="p-10 ">
      <div className="space-y-4 p-6">
        <Typography variant="h1">Heading 1 - h1</Typography>
        <Typography variant="h2">Heading 2 - h2</Typography>
        <Typography variant="h3">Heading 3 - h3</Typography>
        <Typography variant="h4">Heading 4 - h4</Typography>
        <Typography variant="h5">Heading 5 - h5</Typography>
        <Typography variant="h6">Heading 6 - h6</Typography>
      </div>

      <div className="space-y-4 p-6">
        {/* Subtitle (renders <p>) */}
        <Typography variant="subtitle">
          Subtitle text - uses <code>&lt;p&gt;</code> with muted style
        </Typography>

        {/* Body (renders <p>) */}
        <Typography variant="body">
          Body text - regular paragraph with base size and foreground color
        </Typography>

        {/* P (renders <p>) */}
        <Typography variant="p">
          Paragraph (variant="p") - standard paragraph block
        </Typography>

        {/* Span (renders <span>) */}
        <Typography variant="span">
          Inline span text (variant="span") - rendered in{" "}
          <code>&lt;span&gt;</code>
        </Typography>
        <br />

        {/* Caption (renders <span>) */}
        <Typography variant="caption">
          Caption text - smaller and muted, rendered in{" "}
          <code>&lt;span&gt;</code>
        </Typography>
        <br />
        {/* Small (renders <small>) */}
        <Typography variant="small">
          Small tag text - rendered as <code>&lt;small&gt;</code>
        </Typography>
        <br />
        {/* Muted (renders <span>) */}
        <Typography variant="muted">
          Muted text - subtle gray, rendered in <code>&lt;span&gt;</code>
        </Typography>
      </div>

      <Typography variant="h3" className="">
        Dialog component
      </Typography>
      <CustomDialog
        title="title"
        description="description"
        trigger={
          <button className="px-3 py-2 bg-yellow-500 text-black rounded-lg  my-5">
            open dialog
          </button>
        }
      >
        dialog body
      </CustomDialog>

      <Typography variant="h3">DropdownMenu component</Typography>
      <CustomDropdown
        items={items}
        trigger={
          <button className="px-3 py-2 bg-yellow-500 text-black rounded-lg  my-5">
            open dropdown
          </button>
        }
      />

      <h1 className="text-2xl m-10">Form components </h1>
      <Form.Root
        onSubmit={handleSubmit(onSubmit)}
        className="border rounded-2xl p-5"
      >
        <TextField
          label="Email"
          required
          type="email"
          name="email"
          placeholder="you@example.com"
          register={register("email")}
          error={errors.email}
          autoComplete="on"
        />

        <TextField
          label="Question"
          name="question"
          placeholder="Ask something..."
          register={register("question")}
          error={errors.question}
        />

        <NumberField
          label="Mobile no"
          name="mobile"
          placeholder="Enter your no"
          register={register("mobile")}
          error={errors.mobile}
        />

        <RadioGroupField
          label="Select age group"
          name="age"
          description="Pick one option"
          register={register("age")}
          error={errors.age}
          required
          options={[
            { label: "Small", value: "small" },
            { label: "Medium", value: "medium" },
            { label: "Large", value: "large", disabled: true },
          ]}
        />

        <TextareaField
          label="Bio"
          name="bio"
          placeholder="Write your bio here..."
          register={register("bio")}
          error={errors.bio}
        />
        <PasswordField
          label="Password"
          required
          name="passcode"
          placeholder="Enter password"
          register={register("passcode")}
          error={errors.passcode}
        />
        <SelectField
          label="Role"
          name="role"
          register={register("role")}
          placeholder="Choose a role"
          required
          description="Pick one from the list"
          error={errors.role}
          options={options}
        />

        <CheckboxField
          label="I accept the terms"
          name="isAdult"
          register={register("isAdult")}
          required
          error={errors.isAdult}
          description="Please agree before proceeding"
        />

        <CheckboxGroupField
          label="Select studies"
          name="study"
          register={register("study")}
          description="Pick multiple study"
          required
          error={errors.study}
          options={studyOptions}
        />

        <SubmitButton loading={isSubmitting}> Submit </SubmitButton>
      </Form.Root>
    </div>
  );
};

export default HowToUse;
