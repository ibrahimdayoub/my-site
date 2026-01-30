import styled from "styled-components";

export const SkillsCardContainer = styled.div`
	display: flex;
	flex-wrap:wrap;
	justify-content:center;
	gap: 1rem;
	margin-right: 25px;
	margin-top: 25px;

	@media ${({ theme }) => theme.breakpoints.mobile}{
	gap: 0.5rem;
	margin: 0px auto;
	margin-top: 25px;
	}
`;

export const SkillsCard = styled.div`
	width:20%;
	border: 1px solid #fff;
	padding: 1rem;
	border-radius: 0.5rem;
	display: flex;
	gap:10px;
	flex-direction: column;
	justify-content:center;
	align-items: center;
	text-align: center;
	background-color: ${({ theme }) => theme.colors.primary_light};

	@media ${({ theme }) => theme.breakpoints.mobile}{
		width:22.5%;
		gap:5px;
	}

	@media(max-width: 350px) {
		width:40%;
		padding: 0.5rem;
		border-radius: 0.35rem;
  	}

	h5 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        display: block;
    }
`

export const SkillsTabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-right: 25px;
  margin-bottom: 25px;

  @media ${({ theme }) => theme.breakpoints.mobile}{
	gap: 0.5rem;
	margin: 0px auto;
	margin-top: 25px;
	}
`;

export const SkillsTabButton = styled.button`
	width:20%;
	border: 1px solid ${({ active, theme }) => active ? "transparent" : theme.colors.white};
	padding: 1rem;
	border-radius: 0.5rem;
	display: flex;
	flex-direction:column;
	justify-content:center;
	align-items: center;
	gap:5px;
	color:white;
	cursor:pointer;
	transition: all 0.5s ease;
	background-color: ${({ active, theme }) => active ? theme.colors.secondary : "transparent"};

	&:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: transparent;
  	}

	@media ${({ theme }) => theme.breakpoints.mobile}{
		width:22.5%;

		span {
			display:none
		}
	}

	@media(max-width: 350px) {
		width:40%;
		padding: 0.5rem;
		border-radius: 0.35rem;

		span {
			display:inline
		}
  	}

	svg {
		min-width:max-content;
		font-size:25px
	}

	span {
		white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        // display: block;
	}
`;