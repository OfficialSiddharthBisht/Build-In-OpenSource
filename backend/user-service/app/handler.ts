import { APIGatewayProxyEventV2 } from "aws-lambda";

export const Signup = async (event: APIGatewayProxyEventV2) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "response from signup handler",
      data: {},
    }),
  };
};
