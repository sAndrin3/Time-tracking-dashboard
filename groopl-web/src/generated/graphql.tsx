import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  is_read: Scalars['Boolean'];
  receiver_id: Scalars['Float'];
  sender_id: Scalars['Float'];
  text: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  createPost: Post;
  createRide: Ride;
  deletePost: Scalars['Boolean'];
  deleteRide: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  sendMessage: Message;
  updatePost?: Maybe<Post>;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationCreateRideArgs = {
  input: RideInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteRideArgs = {
  id: Scalars['Int'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernameEmailPasswordInput;
};


export type MutationSendMessageArgs = {
  is_read: Scalars['Boolean'];
  receiver_id: Scalars['Int'];
  text: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  createdAt: Scalars['String'];
  creator: User;
  creatorId: Scalars['Float'];
  id: Scalars['Float'];
  points: Scalars['Float'];
  text: Scalars['String'];
  textSnippet: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PostInput = {
  text: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  ride?: Maybe<Ride>;
  rides: Array<Ride>;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QueryPostsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryRideArgs = {
  id: Scalars['Int'];
};


export type QueryRidesArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
};

export type Ride = {
  __typename?: 'Ride';
  createdAt: Scalars['String'];
  creator: User;
  creatorId: Scalars['Float'];
  from: Scalars['String'];
  id: Scalars['Float'];
  seats: Scalars['Float'];
  to: Scalars['String'];
  updatedAt: Scalars['String'];
  when: Scalars['DateTime'];
};

export type RideInput = {
  from: Scalars['String'];
  seats: Scalars['Float'];
  to: Scalars['String'];
  when: Scalars['DateTime'];
};

export type User = {
  __typename?: 'User';
  avatar_source: Scalars['String'];
  car_plate: Scalars['String'];
  contact: Scalars['String'];
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Float'];
  isDriver: Scalars['Boolean'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernameEmailPasswordInput = {
  email: Scalars['String'];
  isDriver: Scalars['Boolean'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Error_DataFragment = { __typename?: 'FieldError', field: string, message: string };

export type Post_DataFragment = { __typename?: 'Post', id: number, createdAt: string, updatedAt: string, title: string, text: string, points: number, creatorId: number };

export type Ride_DataFragment = { __typename?: 'Ride', id: number, to: string, from: string, when: any, seats: number, creatorId: number, createdAt: string, updatedAt: string };

export type User_DataFragment = { __typename?: 'User', id: number, username: string };

export type UserResponse_DataFragment = { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string } | null };

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string } | null } };

export type CreatePostMutationVariables = Exact<{
  input: PostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: number, createdAt: string, updatedAt: string, title: string, text: string, points: number, creatorId: number } };

export type CreateRideMutationVariables = Exact<{
  input: RideInput;
}>;


export type CreateRideMutation = { __typename?: 'Mutation', createRide: { __typename?: 'Ride', id: number, to: string, from: string, when: any, seats: number, creatorId: number, createdAt: string, updatedAt: string } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  options: UsernameEmailPasswordInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string } | null } };

export type SendMessageMutationVariables = Exact<{
  text: Scalars['String'];
  receiver_id: Scalars['Int'];
  is_read: Scalars['Boolean'];
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: { __typename?: 'Message', id: number, sender_id: number, receiver_id: number, text: string, is_read: boolean, createdAt: string } };

export type UpdatePostMutationVariables = Exact<{
  title: Scalars['String'];
  id: Scalars['Int'];
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost?: { __typename?: 'Post', id: number, createdAt: string, updatedAt: string, title: string, text: string, points: number, creatorId: number } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string } | null };

export type PostQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: number, createdAt: string, updatedAt: string, title: string, text: string, points: number, creatorId: number } | null };

export type PostsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: InputMaybe<Scalars['String']>;
}>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: number, createdAt: string, updatedAt: string, title: string, textSnippet: string, points: number, creatorId: number }> };

export type RideQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RideQuery = { __typename?: 'Query', ride?: { __typename?: 'Ride', id: number, to: string, from: string, when: any, seats: number, creatorId: number, createdAt: string, updatedAt: string } | null };

export type RidesQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: InputMaybe<Scalars['String']>;
}>;


export type RidesQuery = { __typename?: 'Query', rides: Array<{ __typename?: 'Ride', id: number, to: string, from: string, when: any, seats: number, creatorId: number, createdAt: string, updatedAt: string }> };

export const Post_DataFragmentDoc = gql`
    fragment Post_Data on Post {
  id
  createdAt
  updatedAt
  title
  text
  points
  creatorId
}
    `;
export const Ride_DataFragmentDoc = gql`
    fragment Ride_Data on Ride {
  id
  to
  from
  when
  seats
  creatorId
  createdAt
  updatedAt
}
    `;
export const Error_DataFragmentDoc = gql`
    fragment Error_Data on FieldError {
  field
  message
}
    `;
export const User_DataFragmentDoc = gql`
    fragment User_Data on User {
  id
  username
}
    `;
export const UserResponse_DataFragmentDoc = gql`
    fragment UserResponse_Data on UserResponse {
  errors {
    ...Error_Data
  }
  user {
    ...User_Data
  }
}
    ${Error_DataFragmentDoc}
${User_DataFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...UserResponse_Data
  }
}
    ${UserResponse_DataFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const CreatePostDocument = gql`
    mutation CreatePost($input: PostInput!) {
  createPost(input: $input) {
    ...Post_Data
  }
}
    ${Post_DataFragmentDoc}`;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);
};
export const CreateRideDocument = gql`
    mutation CreateRide($input: RideInput!) {
  createRide(input: $input) {
    ...Ride_Data
  }
}
    ${Ride_DataFragmentDoc}`;

export function useCreateRideMutation() {
  return Urql.useMutation<CreateRideMutation, CreateRideMutationVariables>(CreateRideDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...UserResponse_Data
  }
}
    ${UserResponse_DataFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($options: UsernameEmailPasswordInput!) {
  register(options: $options) {
    ...UserResponse_Data
  }
}
    ${UserResponse_DataFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const SendMessageDocument = gql`
    mutation sendMessage($text: String!, $receiver_id: Int!, $is_read: Boolean!) {
  sendMessage(text: $text, receiver_id: $receiver_id, is_read: $is_read) {
    id
    sender_id
    receiver_id
    text
    is_read
    createdAt
  }
}
    `;

export function useSendMessageMutation() {
  return Urql.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument);
};
export const UpdatePostDocument = gql`
    mutation UpdatePost($title: String!, $id: Int!) {
  updatePost(title: $title, id: $id) {
    ...Post_Data
  }
}
    ${Post_DataFragmentDoc}`;

export function useUpdatePostMutation() {
  return Urql.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    ...User_Data
  }
}
    ${User_DataFragmentDoc}`;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery, MeQueryVariables>({ query: MeDocument, ...options });
};
export const PostDocument = gql`
    query Post($id: Int!) {
  post(id: $id) {
    ...Post_Data
  }
}
    ${Post_DataFragmentDoc}`;

export function usePostQuery(options: Omit<Urql.UseQueryArgs<PostQueryVariables>, 'query'>) {
  return Urql.useQuery<PostQuery, PostQueryVariables>({ query: PostDocument, ...options });
};
export const PostsDocument = gql`
    query Posts($limit: Int!, $cursor: String) {
  posts(limit: $limit, cursor: $cursor) {
    id
    createdAt
    updatedAt
    title
    textSnippet
    points
    creatorId
  }
}
    `;

export function usePostsQuery(options: Omit<Urql.UseQueryArgs<PostsQueryVariables>, 'query'>) {
  return Urql.useQuery<PostsQuery, PostsQueryVariables>({ query: PostsDocument, ...options });
};
export const RideDocument = gql`
    query Ride($id: Int!) {
  ride(id: $id) {
    ...Ride_Data
  }
}
    ${Ride_DataFragmentDoc}`;

export function useRideQuery(options: Omit<Urql.UseQueryArgs<RideQueryVariables>, 'query'>) {
  return Urql.useQuery<RideQuery, RideQueryVariables>({ query: RideDocument, ...options });
};
export const RidesDocument = gql`
    query Rides($limit: Int!, $cursor: String) {
  rides(limit: $limit, cursor: $cursor) {
    ...Ride_Data
  }
}
    ${Ride_DataFragmentDoc}`;

export function useRidesQuery(options: Omit<Urql.UseQueryArgs<RidesQueryVariables>, 'query'>) {
  return Urql.useQuery<RidesQuery, RidesQueryVariables>({ query: RidesDocument, ...options });
};