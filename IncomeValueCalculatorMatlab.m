% How much money they would have if they invested and if they didn't 
% Considering inflation


%Gathering info about user
prompt2 = "How old are you? ";
prompt = "What is your yearly income? ";
prompt3 = "Do you plan on investing? (yes/no)";
prompt4 = "In how many years do you plan to start investing? (If you already invest just put 0)";
prompt5 = "What is the percentage you are planning to invest? (__%)";

age = input(prompt2);
income = input(prompt);
investing = input(prompt3, 's');
if investing == "yes"
    years_investing = input (prompt4);
    percentage_investing = input (prompt5);
end
savings = 0;
savings_inv = 0;
underage=0;
n=0;

disp('The average inflation per year is 3.8%, which means that the price of products increase by 3.8% each year.');
disp('However, the average increase in salary per year is only 3%.');
disp('Furthermore, the average cost of living for one person in the US is 3189.00 per month, meaning 38266.00 per year.');
living_cost = 38266;
disp(' ');

%underage
if age < 18
    disp('Because you are underage we are considering that your parents pay your living costs until you are 18');
    underage = 1;
    while age < 18
        savings = savings + income;
        age = age+1;
        n=n+1;
    end
end

%in case someone's income is lower than the living cost
if income < living_cost
    disp('Your current income is lower than the value we are using for cost of living, so we are changing it for 110% of the cost of living');
    disp('This does not mean anything, is just that because we are using the average, it does not apply to places that the cost of living and salary is lower');
    income = 1.1*38266;
end 




if underage == 1
    if investing =="yes"
        if years_investing > n %error control
            disp('Sorry, you can only start investing when you are over 18');
        elseif years_investing == n %same as starting now for adults
            [savings,savings2, savings3]=investment(age, savings, income, living_cost, percentage_investing);
            display = ["When you retire you will have ", (savings+savings2), " dollars if you invested in savings and ", (savings+savings3), " if you invested in stocks"];
            disp(display);
            display2 = ["This is very good considering that you would only have ",savings," dollars if you didn't invest"];
            disp(display2);
        else %investing later
            [savings,savings2, savings3]=investment((age+years_investing), savings, income, living_cost, percentage_investing);
            display = ["When you retire you will have ", (savings+savings2), " dollars if you invest in savings and ", (savings+savings3), " if you invest in stocks"];
            disp(display);
            display2 = ["This is very good considering that you would only have ",savings," dollars if you didn't invest"];
            disp(display2);
            [savings,savings2, savings3]=investment((age+years_investing), savings, income, living_cost, percentage_investing);
            display3 = ["However, if you started investing now you would have ", (savings+savings2), " dollars if you invested in savings and ", (savings+savings3), " if you invested in stocks"];
            disp(display3);
        end
    else %not investing
        [savings,savings2, savings3]=investment(age, savings, income, living_cost, percentage_investing);
        display = ["When you retire you will have ", savings, " dollars from working"];
        disp(display);
        display2 = ["However, if you invested you would have had an extra of ", savings2, " dollars if you invest in a savings account and an extra of ", savings3, " dollars if you invest in stocks"];
        disp(display2);
    end
    
    
else
    if investing =="yes"
        if years_investing == 0 %investing now
            [savings,savings2, savings3]=investment(age, savings, income, living_cost, percentage_investing);
            display = ["When you retire you will have ", (savings+savings2), " dollars if you invest in savings and ", (savings+savings3), " if you invest in stocks"];
            disp(display);
            display2 = ["This is very good considering that you would only have ",savings," dollars if you didn't invest"];
            disp(display2);
        else %investing later
            [savings,savings2, savings3]=investment((age+years_investing), savings, income, living_cost, percentage_investing);
            display = ["When you retire you will have ", (savings+savings2), " dollars if you invest in savings and ", (savings+savings3), " if you invest in stocks"];
            disp(display);
            display2 = ["This is very good considering that you would only have ",savings," dollars if you didn't invest"];
            disp(display2);
            [savings,savings2, savings3]=investment((age+years_investing), savings, income, living_cost, percentage_investing);
            display3 = ["However, if you started investing now you would have ", (savings+savings2), " dollars if you invested in savings and ", (savings+savings3), " if you invested in stocks"];
            disp(display3);
        end
    else %not investing
        [savings,savings2, savings3]=investment(age, savings, income, living_cost, percentage_investing);
        display = ["When you retire you will have ", savings, " dollars from working"];
        disp(display);
        display2 = ["However, if you invested you would have had an extra of ", savings2, " dollars if you invested in a savings account and an extra of ", savings3, " dollars if you invested in stocks"];
        disp(display2);
    end
end


%Source 
%https://www.worlddata.info/america/usa/inflation-rates.php#:~:text=During%20the%20observation%20period%20from,year%20inflation%20rate%20was%206.4%25. 
%https://www.investopedia.com/articles/personal-finance/090415/salary-secrets-what-considered-big-raise.asp
%https://www.upwardli.com/resources/new-to-america-what-is-the-average-monthly-cost-of-living-in-usa#:~:text=The%20average%20monthly%20living%20expenses,which%20is%20%2485%2C139%20per%20year.
%https://www.dol.gov/general/topic/wages/minimumwage#:~:text=The%20federal%20minimum%20wage%20for,of%20the%20two%20minimum%20wages.
%https://www.bankrate.com/banking/savings/average-savings-interest-rates/#:~:text=National%20average%20savings%20account%20interest,ll%20earn%20on%20your%20savings.




%calculating the amount of money on your savings when you retire
function [returning, returning2, returning3] = investment(age, savings, income, living_cost, percentage_investing)
    age2 = age;
    savings2 = savings;
    income2 = income;
    living_cost2 = living_cost;
    

    age3 = age;
    savings3 = savings;
    income3 = income;
    living_cost3 = living_cost;
    

    %no investments
    while age <= 65
    
        savings = savings + income - living_cost;
    
        income = income*1.03;
        living_cost = living_cost *1.038;
        age = age + 1; 
    end
    %investment in savings account (0.3% per year)
    while age2 <= 65
    
        savings2 = (savings2*1.003) + (income2*percentage_investing);
    
        income2 = income2*1.03;
        living_cost2 = living_cost2 *1.038;
        age2 = age2 + 1; 
    end
    %investment in stocks (10% per year)
while age3 <= 65
    
    savings3 = savings3*1.1 + (income3*percentage_investing);
    
    income3 = income3*1.03;
    living_cost3 = living_cost3 *1.038;
    age3 = age3 + 1; 
end

returning=savings;
returning2=savings2;
returning3=savings3;

end




