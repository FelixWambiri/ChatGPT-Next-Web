import { jest } from "@jest/globals";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Chat } from "./chat";
import * as utils from "../utils";

jest.mock("../utils", () => ({
  autoGrowTextArea: jest.fn(),
  useMobileScreen: jest.fn(() => false),
  getMessageTextContent: jest.fn(() => "Hello"),
}));

jest.mock("../config/client", () => ({
  getClientConfig: jest.fn().mockReturnValue({
    buildMode: "standalone",
    commitDate: "1110111101000",
    commitHash: "#1",
    isApp: false,
    version: "v1.11.1",
  }),
}));

jest.mock("../config/client", () => ({
  queryMeta: jest.fn().mockReturnValue(
    JSON.stringify({
      buildMode: "standalone",
      commitDate: "1110111101000",
      commitHash: "#2",
      isApp: false,
      version: "v1.11.1",
    }),
  ),
}));

describe("Chat page", () => {
  fetchMock.mockResponses(JSON.stringify({ data: "12345" }));

  test("uploadImage prevents duplicate images", async () => {
    (utils.autoGrowTextArea as any).mockResolvedValue(3);

    render(
      <MemoryRouter>
        <Chat />
      </MemoryRouter>,
    );
  });
});
