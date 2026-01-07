import styled from "styled-components";

export const SkillsCardContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 0.5rem;
	margin-right: 50px;

	@media ${({ theme }) => theme.breakpoints.mobile}{
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 0.5rem;
	justify-content:center;
	margin: 0px auto;
	margin-top: 25px;
	}

	@media(max-width: 350px) {
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 0.5rem;
	justify-content:center;
	margin: 0px auto;
	margin-top: 25px;
  	}
`;

export const SkillsCard = styled.div`
	border: 1px solid #fff;
	padding: 1rem;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content:center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.primary_light};

	@media ${({ theme }) => theme.breakpoints.mobile}{
		padding: 0.5rem;
		border-radius: 0.35rem;
	}
`