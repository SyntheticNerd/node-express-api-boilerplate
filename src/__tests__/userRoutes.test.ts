import request from "supertest";
import { User } from "../models";
import app from "../app";

jest.mock("../models/User");

const mockedUser = User as jest.Mocked<typeof User>;

describe("User API", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new user", async () => {
    const userData = { id: 1, name: "Andrew", email: "andrew@example.com" };

    mockedUser.create.mockResolvedValue(userData);

    const res = await request(app)
      .post("/users")
      .send({ name: "Andrew", email: "andrew@example.com" });

    expect(res.status).toBe(201);
    expect(res.body).toEqual({ user: userData, message: "user.created" });
    expect(mockedUser.create).toHaveBeenCalledWith({
      name: "Andrew",
      email: "andrew@example.com",
    });
  });

  it("should return all users", async () => {
    const users = [
      { id: 1, name: "Andrew", email: "andrew@example.com" },
      { id: 2, name: "Jane", email: "jane@example.com" },
    ] as User[];

    mockedUser.findAll.mockResolvedValue(users);

    const res = await request(app).get("/users");

    expect(res.status).toBe(200);
    expect(res.body).toEqual(users);
    expect(mockedUser.findAll).toHaveBeenCalled();
  });

  it("should get a user by ID", async () => {
    const user = { id: 1, name: "Andrew", email: "andrew@example.com" } as User;
    mockedUser.findByPk.mockResolvedValue(user);

    const res = await request(app).get("/users/1");

    expect(res.status).toBe(200);
    expect(res.body).toEqual(user);
    expect(mockedUser.findByPk).toHaveBeenCalledWith("1");
  });

  it("should return 404 if user not found", async () => {
    mockedUser.findByPk.mockResolvedValue(null);

    const res = await request(app).get("/users/999");

    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: "user.not_found" });
  });
});
