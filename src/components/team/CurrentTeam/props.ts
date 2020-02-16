export interface PropsFromDispatch {
  setCurrentTeam: () => void;
  unsetCurrentTeam: () => void;
}

export type InjectedProps = PropsFromDispatch;
