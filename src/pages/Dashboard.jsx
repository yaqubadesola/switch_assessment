import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../features/profile/profileSlice";
import { fetchAccounts } from "../features/accounts/accountsSlice";
import { fetchTransactions } from "../features/transactions/transactionsSlice";
import ProfileCard from "../components/profile/ProfileCard";
import AccountList from "../components/accounts/AccountList";
import TransactionsTable from "../components/transactions/TransactionsTable";
import Loader from "../components/common/Loader"; // Loader for partial rendering

export default function Dashboard() {
  const dispatch = useDispatch();

  const { data: profile, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { list: accounts, loading: accountsLoading } = useSelector(
    (state) => state.accounts
  );
  const { list: transactions, loading: transactionsLoading } = useSelector(
    (state) => state.transactions
  );

  const [selectedAccount, setSelectedAccount] = useState(null);

  // Load profile and accounts in parallel
  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchAccounts());
  }, [dispatch]);

  // Auto-select "Savings" account once accounts load
  useEffect(() => {
    if (accounts.length > 0 && !selectedAccount) {
      const savingsAcc =
        accounts.find((acc) => acc.type === "Savings") || accounts[0];
      setSelectedAccount(savingsAcc);
      dispatch(fetchTransactions(savingsAcc.id));
    }
  }, [accounts, selectedAccount, dispatch]);

  const handleViewTransactions = (account) => {
    setSelectedAccount(account);
    dispatch(fetchTransactions(account.id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Profile and Accounts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        <div className="lg:col-span-1 py-2 lg:mt-4 lg:ml-12 flex justify-center items-center">
          {profileLoading ? (
            <Loader />
          ) : (
            profile && <ProfileCard profile={profile} />
          )}
        </div>

        <div className="lg:col-span-3 flex items-center justify-center">
          {accountsLoading ? (
            <Loader />
          ) : (
            <AccountList accounts={accounts} onView={handleViewTransactions} />
          )}
        </div>
      </div>

      {/* Transactions Section */}
      {selectedAccount && (
        <div className="mt-6">
          {transactionsLoading ? (
            <Loader />
          ) : (
            <TransactionsTable
              accountType={selectedAccount.type}
              transactions={transactions}
            />
          )}
        </div>
      )}
    </div>
  );
}
