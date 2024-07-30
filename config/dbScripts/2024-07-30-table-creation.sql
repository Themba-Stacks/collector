CREATE TABLE IF NOT EXISTS draw_detail (
    id INT PRIMARY KEY,
    draw_number INT NOT NULL,
    draw_date DATE NOT NULL,
    next_draw_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS lotto (
    id INT PRIMARY KEY,
    draw_detail_id INT NOT NULL,
    ball1 INT NOT NULL,
    ball2 INT NOT NULL,
    ball3 INT NOT NULL,
    ball4 INT NOT NULL,
    ball5 INT NOT NULL,
    ball6 INT NOT NULL,
    bonus_ball INT NOT NULL,
    game_name VARCHAR(30) NOT NULL
);



CREATE TABLE IF NOT EXISTS total_winner_record (
    id INT PRIMARY KEY,
    draw_detail_id INT NOT NULL,
    lotto_millionairs INT NOT NULL,
    lotto_winners INT NOT NULL,
    ithuba_millionairs INT NOT NULL,
    ithuba_winners INT NOT NULL
);

CREATE TABLE IF NOT EXISTS winner_payout (
    id INT PRIMARY KEY,
    lotto_id INT NOT NULL,
    div1_winners INT NOT NULL,
    div1_payout DECIMAL(12,2) NOT NULL,
    div2_winners INT NOT NULL,
    div2_payout DECIMAL(12,2) NOT NULL,
    div3_winners INT NOT NULL,
    div3_payout DECIMAL(12,2) NOT NULL,
    div4_winners INT NOT NULL,
    div4_payout DECIMAL(12,2) NOT NULL,
    div5_winners INT NOT NULL,
    div5_payout DECIMAL(12,2) NOT NULL,
    div6_winners INT NOT NULL,
    div6_payout DECIMAL(12,2) NOT NULL,
    div7_winners INT NOT NULL,
    div7_payout DECIMAL(12,2) NOT NULL,
    div8_winners INT NOT NULL,
    div8_payout DECIMAL(12,2) NOT NULL,
    rollover_amount decimal (12, 2) NOT NULL,
    rollover_number INT NOT NULL,
    total_prize_pool decimal (12, 2) NOT NULL,
    total_sales INT NOT NULL,
    estimated_jackpot INT NOT NULL,
    guaranteed_jackpot INT NOT NULL,
    draw_machine varchar(10) NOT NULL,
    ball_set varchar(10) NOT NULL,
    status varchar(30) NOT NULL,
    gpwinners INT NOT NULL,
    wcwinners INT NOT NULL,
    ncwinners INT NOT NULL,
    ecwinners INT NOT NULL,
    mpwinners INT NOT NULL,
    lpwinners INT NOT NULL,
    fswinners INT NOT NULL,
    kznwinners INT NOT NULL,
    nwwinners INT NOT NULL,
    winners INT NOT NULL,
    millionairs INT NOT NULL
);


ALTER TABLE IF EXISTS total_winner_record ADD FOREIGN KEY (draw_detail_id) REFERENCES draw_detail (id);
ALTER TABLE IF EXISTS lotto ADD FOREIGN KEY (draw_detail_id) REFERENCES draw_detail (id);
ALTER TABLE IF EXISTS winner_payout ADD FOREIGN KEY (lotto_id) REFERENCES lotto (id);

