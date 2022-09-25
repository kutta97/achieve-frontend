import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  name?: string;
  image?: string;
  description?: string;
}

export const SidebarProfile = ({
  name = '',
  image,
  description = '',
}: Props) => {
  return (
    <SidebarProfileFrame>
      <Image
        className="profileImage"
        src={image ?? '/assets/test/profile_test.png'}
        alt="profile image"
        width={130}
        height={130}
      />

      <ProfileInfo>
        <p className="name">{name}</p>
        <p className="description">{description}</p>
      </ProfileInfo>
    </SidebarProfileFrame>
  );
};

const SidebarProfileFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .profileImage {
    border-radius: 50%;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;

  .name {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 12px;
    text-align: start;

    color: ${(props) => props.theme.colors.BasicBlack};
  }
  .description {
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    margin-bottom: 24px;

    color: ${(props) => props.theme.colors.BasicGray};
    white-space: pre;
  }
`;
